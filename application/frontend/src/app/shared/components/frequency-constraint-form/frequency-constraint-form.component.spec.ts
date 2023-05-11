/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyConstraintFormComponent } from './frequency-constraint-form.component';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { FakeMatIconRegistry } from 'src/test/material-fakes';
import { MaterialModule } from 'src/app/material';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';

const formDirective = new FormGroupDirective([], []);
formDirective.form = new FormGroup({
  minBreakDuration: new FormControl(''),
  maxInterBreakDuration: new FormControl(''),
});

@Component({
  selector: 'app-duration-min-sec-form',
  template: ''
})
class MockAppDurationMinSecFormComponent {
  @Input() appearance = 'legacy';
  @Input() parentFormGroup: FormGroup;
  @Input() errorStateMatcher: ErrorStateMatcher;
  @Input() labelName: string;
  @Input() showUnset: boolean;
  @Input() isUnset: boolean;
  @Input() fieldName: string;
  @Output() unsetEvent = new EventEmitter<{ field: string }>();
}

describe('FrequencyConstraitsFormComponent', () => {
  let component: FrequencyConstraintFormComponent;
  let fixture: ComponentFixture<FrequencyConstraintFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [FrequencyConstraintFormComponent, MockAppDurationMinSecFormComponent],
      providers: [{ provide: ControlContainer, useValue: formDirective }],
    })
      .overrideProvider(MatIconRegistry, { useFactory: () => new FakeMatIconRegistry() })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyConstraintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
