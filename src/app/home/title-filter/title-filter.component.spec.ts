import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFilterComponent } from './title-filter.component';

describe('TitleFilterComponent', () => {
  let component: TitleFilterComponent;
  let fixture: ComponentFixture<TitleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
