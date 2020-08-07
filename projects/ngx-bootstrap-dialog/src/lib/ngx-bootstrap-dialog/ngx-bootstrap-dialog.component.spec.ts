import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { mergedConfirmOptions } from './../ngx-bootstrap-dialog.common.spec';
import { NgxBootstrapDialogOptions } from './../ngx-bootstrap-dialog.config';
import { NgxBootstrapDialogComponent } from './ngx-bootstrap-dialog.component';

describe('NgxBootstrapDialogComponent', () => {
  let component: NgxBootstrapDialogComponent;
  let fixture: ComponentFixture<NgxBootstrapDialogComponent>;
  let activeModalSpy: jasmine.SpyObj<NgbActiveModal>;

  let elCancelButton: HTMLElement;
  let elConfirmButton: HTMLElement;
  let elCloseButton: HTMLElement;
  let elTitle: HTMLElement;
  let elMessage: HTMLElement;

  const getElements = () => {
    elCancelButton = fixture.nativeElement.querySelector('button.btn-cancel');
    elConfirmButton = fixture.nativeElement.querySelector('button.btn-confirm');
    elCloseButton = fixture.nativeElement.querySelector('button.btn-close');
    elTitle = fixture.nativeElement.querySelector('h4.modal-title');
    elMessage = fixture.nativeElement.querySelector('div.modal-body');
  };

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('NgbActiveModal', ['close', 'dismiss']);

    TestBed.configureTestingModule({
      declarations: [NgxBootstrapDialogComponent],
      providers: [{ provide: NgbActiveModal, useValue: spy }],
    }).compileComponents();

    activeModalSpy = TestBed.inject(NgbActiveModal) as jasmine.SpyObj<
      NgbActiveModal
    >;

    fixture = TestBed.createComponent(NgxBootstrapDialogComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('All options enabled', () => {
    beforeEach(() => {
      component.options = {
        ...mergedConfirmOptions,
        showCloseButton: true,
      };
      fixture.detectChanges();
      getElements();
    });

    it('should show a title', () => {
      expect(elTitle.innerText).toEqual(mergedConfirmOptions.title);
    });

    it('should show a message', () => {
      expect(elMessage.innerText).toEqual(mergedConfirmOptions.message);
    });

    describe('cancel button', () => {
      it('should be visible', () => {
        expect(elCancelButton).toBeDefined();
      });

      it('with a label', () => {
        expect(elCancelButton.innerText).toEqual(
          mergedConfirmOptions.cancelButtonLabel,
        );
      });

      it('with a css class', () => {
        expect(elCancelButton.className).toEqual(
          `btn-cancel ${mergedConfirmOptions.cancelButtonClass}`,
        );
      });

      it('clicking on it should dismiss the dialog', () => {
        elCancelButton.click();
        expect(activeModalSpy.dismiss).toHaveBeenCalled();
      });
    });

    describe('confirm button', () => {
      it('should be visible', () => {
        expect(elConfirmButton).toBeDefined();
      });

      it('with a label', () => {
        expect(elConfirmButton.innerText).toEqual(
          mergedConfirmOptions.confirmButtonLabel,
        );
      });

      it('with a css class', () => {
        expect(elConfirmButton.className).toEqual(
          `btn-confirm ${mergedConfirmOptions.confirmButtonClass}`,
        );
      });

      it('clicking on it should close the dialog', () => {
        elConfirmButton.click();
        expect(activeModalSpy.close).toHaveBeenCalled();
      });
    });

    describe('close button', () => {
      it('should be visible', () => {
        expect(elCloseButton).toBeDefined();
      });

      it('clicking on it should dismiss the dialog', () => {
        elCloseButton.click();
        expect(activeModalSpy.dismiss).toHaveBeenCalled();
      });
    });
  });

  describe('All options disbled', () => {
    beforeEach(() => {
      component.options = {} as NgxBootstrapDialogOptions;
      fixture.detectChanges();
      getElements();
    });

    it('should NOT show a title', () => {
      expect(elTitle.innerText).toEqual('');
    });

    it('should NOT show a message', () => {
      expect(elMessage).toBeNull();
    });

    describe('cancel button', () => {
      it('should NOT be visible', () => {
        expect(elCancelButton).toBeNull();
      });
    });

    describe('confirm button', () => {
      it('should NOT be visible', () => {
        expect(elConfirmButton).toBeNull();
      });
    });

    describe('close button', () => {
      it('should NOT be visible', () => {
        expect(elCloseButton).toBeNull();
      });
    });
  });
});
