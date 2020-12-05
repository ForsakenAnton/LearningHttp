import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithHttpClientComponent } from './work-with-http-client.component';

describe('WorkWithHttpClientComponent', () => {
  let component: WorkWithHttpClientComponent;
  let fixture: ComponentFixture<WorkWithHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithHttpClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
