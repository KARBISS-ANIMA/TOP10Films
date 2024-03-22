import {Component, effect, input, Input, model, signal} from "@angular/core";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ],
  templateUrl: "./input.component.html",
})
export class InputComponent implements ControlValueAccessor {

  @Input() label: string | undefined = "";
  @Input({required: true}) id: string = "";
  @Input({required: true}) name: string = "";
  inputType = input<"text" | "number">("text");
  @Input() placeholder: string | undefined = "";
  @Input() error="";
  constructor() {
    effect(() => {
      this.onChange(this.inputValue());
    });
  }

  inputValue = signal<string>("");
  inputDisabled = signal<boolean>(false);

  onChange = (value: string) => {
  };
  onTouched = () => {
  };

  writeValue(value: string): void {
    this.inputValue.set(value);
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.inputDisabled.set(isDisabled);
  }

}
