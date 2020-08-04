import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { NgxBootstrapDialogAlertComponent } from './ngx-bootstrap-dialog-alert/ngx-bootstrap-dialog-alert.component';
import {
  NgxBootstrapDialogAlertDeafultOptions,
  NgxBootstrapDialogAlertOptions,
  NgxBootstrapDialogConfirmDefaultOptions,
  NgxBootstrapDialogConfirmOptions,
  NgxBootstrapDialogService,
} from './ngx-bootstrap-dialog.service';

describe('NgxBootstrapDialogService', () => {
  let service: NgxBootstrapDialogService;
  let modalSpy: jasmine.SpyObj<NgbModal>;
  let fixture: ComponentFixture<NgxBootstrapDialogAlertComponent>;

  const alertOptions: NgxBootstrapDialogAlertOptions = {
    title: 'Title',
    message: 'Message',
  };

  const defaultAlertOptions = new NgxBootstrapDialogAlertDeafultOptions();

  const mergedAlterOptions = {
    ...defaultAlertOptions,
    ...alertOptions,
  };

  const confirmOptions: NgxBootstrapDialogConfirmOptions = {
    title: 'Title',
    message: 'Message',
  };

  const defaultConfirmOptions = new NgxBootstrapDialogConfirmDefaultOptions();

  const mergedConfirmOptions = {
    ...defaultConfirmOptions,
    ...confirmOptions,
  };

  const ngbModalOptions: NgbModalOptions = {
    size: defaultAlertOptions.size,
  };

  const dialogRefStub: Partial<NgbModalRef> = {
    componentInstance: {
      options: null,
    },
    result: new Promise((res) => true),
  };

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
        fixture,
        alertOptions,
        new NgxBootstrapDialogAlertDeafultOptions(),
      );
    });

    it('should call modal.open', () => {
      expect(modalSpy.open).toHaveBeenCalledWith(fixture, ngbModalOptions);
    });

    it('should merge options with defaultOptions and pass to the modal component', () => {
      expect(dialogRef.componentInstance.options).toEqual(
        jasmine.objectContaining(mergedAlterOptions),
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
      promise = service.alert(confirmOptions);
    });

    it('should returns a promise', () => {
      expect(promise.then).toBeDefined();
    });

    it('should set alertRef instance', () => {
      expect(service.alertRef).toBeDefined();
    });
  });
});
