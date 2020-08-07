import { TestBed } from '@angular/core/testing';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import {
  alertOptions,
  confirmOptions,
  globalDefaultAlertOptions,
  globalDefaultConfirmOptions,
  mergedAlertOptions,
  mergedGlobalDefaultAlertOptions,
} from './ngx-bootstrap-dialog.common.spec';
import {
  NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS,
  NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS,
  NgxBootstrapDialogAlertDeafultOptions,
} from './ngx-bootstrap-dialog.config';
import { NgxBootstrapDialogService } from './ngx-bootstrap-dialog.service';
import { NgxBootstrapDialogComponent } from './ngx-bootstrap-dialog/ngx-bootstrap-dialog.component';

describe('NgxBootstrapDialogService', () => {
  let service: NgxBootstrapDialogService;
  let modalSpy: jasmine.SpyObj<NgbModal>;

  const dialogRefStub: Partial<NgbModalRef> = {
    componentInstance: {
      options: null,
    },
    result: new Promise((res) => true),
  };

  describe('Without global config', () => {
    beforeEach(() => {
      const spy = jasmine.createSpyObj('NgbModal', ['open']);

      TestBed.configureTestingModule({
        providers: [
          NgxBootstrapDialogService,
          { provide: NgbModal, useValue: spy },
        ],
      });

      service = TestBed.inject(NgxBootstrapDialogService);
      modalSpy = TestBed.inject(NgbModal) as jasmine.SpyObj<NgbModal>;

      modalSpy.open.and.returnValue(dialogRefStub as NgbModalRef);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    describe('dialog method', () => {
      let dialogRef;

      beforeEach(() => {
        dialogRef = service.dialog(
          NgxBootstrapDialogComponent,
          new NgxBootstrapDialogAlertDeafultOptions(),
          null,
          alertOptions,
        );
      });

      it('should call modal.open', () => {
        expect(modalSpy.open).toHaveBeenCalledWith(
          NgxBootstrapDialogComponent,
          mergedAlertOptions.ngbModalOptions,
        );
      });

      it('should merge options with defaultOptions and pass to the modal component', () => {
        expect(dialogRef.componentInstance.options).toEqual(
          jasmine.objectContaining(mergedAlertOptions),
        );
      });

      it('should returns a modal instance with result promise', () => {
        expect(dialogRef.result.then).toBeDefined();
      });
    });

    describe('alert method', () => {
      let promise;

      beforeEach(() => {
        promise = service.alert(alertOptions);
      });

      it('should returns a promise', () => {
        expect(promise.then).toBeDefined();
      });

      it('should set alertRef instance', () => {
        expect(service.alertRef).toBeDefined();
      });
    });

    describe('confirm method', () => {
      let promise;

      beforeEach(() => {
        promise = service.confirm(confirmOptions);
      });

      it('should returns a promise', () => {
        expect(promise.then).toBeDefined();
      });

      it('should set confirmRef instance', () => {
        expect(service.confirmRef).toBeDefined();
      });
    });
  });

  describe('With global config', () => {
    beforeEach(() => {
      const spy = jasmine.createSpyObj('NgbModal', ['open']);

      TestBed.configureTestingModule({
        providers: [
          NgxBootstrapDialogService,
          { provide: NgbModal, useValue: spy },
          {
            provide: NGX_BOOTSTRAP_ALERT_DEFAULT_OPTIONS,
            useValue: globalDefaultAlertOptions,
          },
          {
            provide: NGX_BOOTSTRAP_CONFIRM_DEFAULT_OPTIONS,
            useValue: globalDefaultConfirmOptions,
          },
        ],
      });

      service = TestBed.inject(NgxBootstrapDialogService);
      modalSpy = TestBed.inject(NgbModal) as jasmine.SpyObj<NgbModal>;

      modalSpy.open.and.returnValue(dialogRefStub as NgbModalRef);
    });

    describe('dialog method', () => {
      let promise;

      beforeEach(() => {
        promise = service.alert(alertOptions);
      });

      it('should merge options with defaultOptions and pass to the modal component', () => {
        expect(service.alertRef.componentInstance.options).toEqual(
          jasmine.objectContaining({
            ...mergedGlobalDefaultAlertOptions,
            ...alertOptions,
          }),
        );
      });

      it('should returns a modal instance with result promise', () => {
        expect(promise.then).toBeDefined();
      });
    });
  });
});
