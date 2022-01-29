import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyEntireComponentSourceComponent } from './copy-entire-component-source.component';

describe('CopyEntireComponentSourceComponent', () => {
  let component: CopyEntireComponentSourceComponent;
  let fixture: ComponentFixture<CopyEntireComponentSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyEntireComponentSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyEntireComponentSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
