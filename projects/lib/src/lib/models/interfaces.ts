import {
  FontSize,
  FontWeight,
  SizeBtn,
  TextColor,
  TypeAlert,
  TypeBtn,
  TypeColor,
} from './enums';

export interface IDropDownItem {
  name: string;
  text: string;
}

export interface IDropDown {
  label: string;
  dropDownList: IDropDownItem[];
  typeBtn: TypeBtn;
  sizeBtn: SizeBtn;
}

export interface IAccordionItem {
  index: number;
  open: boolean;
}

export interface IAlertSystem {
  type: TypeAlert;
  text: string;
  createDate: Date;
  duration: number;
}

export interface ISelectMultipleItem {
  value: string;
  text: string;
  checked: boolean;
}

export interface ISelectMultiple {
  colorItems: TypeColor;
  values: ISelectMultipleItem[];
  placeholder: string;
}

export interface IBoxItem {
  value: string;
  text: string;
}

export interface ILabel {
  text: string;
  color?: TextColor;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}
