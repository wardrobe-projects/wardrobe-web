import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobeComponent } from './wardrobe.component';

describe('WardrobeComponent', () => {
  let component: WardrobeComponent;
  let fixture: ComponentFixture<WardrobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardrobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
