type nv_P = {
  name1: string;
  label1: string;
  type1: string;
  id1: string;
  inputType1: string;
  placeholder1: string;
  validation1: {
    required: {
      value: boolean;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
    // ... other validation properties
  };
  // ... other props expected by Input component
};

export const name_validation: nv_P = {
  name1: "name",
  label1: "Название продукта",
  type1: "text",
  id1: "name",
  // additonText1: "writePhoneName",
  inputType1: "default",
  placeholder1: "Название продукта...",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 3,
      message: "minCharacters3",
    },
  },
};

export const phone_brand_validation = {
  name1: "category",
  label1: "phoneBrand",
  type1: "text",
  id1: "category",
  className1: "flex items-center gap-3",
  additonText1: "selectBrand",
  inputType1: "phoneSelect",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
  },
};
export const phone_price_and_valut_validation = {
  name1: "price",
  label1: "Цена",
  type1: "tel",
  id1: "price",
  inputType1: "default",
  placeholder1: "5500000",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
    min: {
      value: 0,
      message: "maxVal0uzs",
    },
    max: {
      value: 100000000,
      message: "maxVal100mln",
    },
  },
  name2: "valut",
  inputType2: "weightSelect",
  options2: [
    { value: "kg", label: "kg" },
    { value: "metr", label: "metr" },
    { value: "piece", label: "dona" },
    { value: "complect", label: "komplekt" },
  ],
  validation2: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const phone_description_validation = {
  name1: "description",
  label1: "description",
  type1: "text",
  id1: "description",
  inputType1: "textarea",
  rows1: 10,
  placeholder1: "phoneDescLittle",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 3,
      message: "minCharacters3",
    },
  },
};

export const phone_address_validation = {
  name1: "region",
  label1: "address",
  id1: "region",
  className1: "flex items-center gap-3",
  additonText1: "selectRegion",
  options1: [
    { value: "Toshkent", label: "Toshkent" },
    { value: "Samarqand", label: "Samarqand" },
    { value: "Buxoro", label: "Buxoro" },
    { value: "Xorazm", label: "Xorazm" },
    { value: "Qashqadaryo", label: "Qashqadaryo" },
    { value: "Surxondaryo", label: "Surxondaryo" },
    { value: "Jizzax", label: "Jizzax" },
    { value: "Navoiy", label: "Navoiy" },
    { value: "Andijon", label: "Andijon" },
    { value: "Namangan", label: "Namangan" },
    { value: "Farg'ona", label: "Farg'ona" },
    { value: "Sirdaryo", label: "Sirdaryo" },
    { value: "Qoraqalpog'iston", label: "qoraqalpog'iston" },
    { value: "other", label: "other" },
  ],
  inputType1: "phoneSelect",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const phone_number_validation = {
  name1: "phoneNumber",
  additonText1: "writePhoneNumberForContact",
  label1: "phoneNumber",
  type1: "tel",
  inputType1: "phoneNumber",
  id1: "phoneNumber",
  validation1: {
    setValueAs: (e: string) => e.replace(/\D/g, ""),
    minLength: {
      value: 12,
      message: "completeFull",
    },
  },
};

export const phone_document_validation = {
  className1: "flex items-center gap-3",
  name1: "document",
  label1: "boxAnddocuments",
  additonText1: "haveDocumentAndBox",
  id1: "document",
  inputType1: "checkbox",
};

export const phoneBattery_validation = {
  name1: "battery",
  label1: "battery",
  type1: "tel",
  additonText1: "writeBatteryMah",
  id1: "battery",
  inputType1: "default",
  placeholder1: "5000...",
  endText: "mAh",

  validation1: {
    required: {
      value: true,
      message: "required",
    },
    min: {
      value: 0,
      message: "maxVal0uzs",
    },
    max: {
      value: 100000000,
      message: "maxVal100mln",
    },
  },
};

export const phonebatteryHealth_validation = {
  name1: "batteryHealth",
  label1: "battery",
  type1: "tel",
  additonText1: "writebatteryHealth",
  id1: "batteryHealth",
  inputType1: "default",
  placeholder1: "87",
  endText: "%",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
    min: {
      value: 0,
      message: "maxVal0uzs",
    },
    max: {
      value: 100,
      message: "maxVal100",
    },
  },
};

export const phone_color_validation = {
  name1: "color",
  label1: "color",
  type1: "text",
  id1: "color",
  additonText1: "writePhoneColor",
  inputType1: "default",
  placeholder1: "silver...",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 2,
      message: "minCharacters2",
    },
    maxLength: {
      value: 50,
      message: "maxCharacters50",
    },
  },
};

export const phone_delivery_validation = {
  className1: "flex items-center gap-3",
  name1: "shipping",
  label1: "shipping",
  additonText1: "isDeliveryAvailable",
  id1: "shipping",
  inputType1: "checkbox",
};

export const phone_camera_validation = {
  name1: "camera1",
  label1: "camera",
  type1: "number",
  id1: "camera",
  additonText1: "writePhoneCamera",
  inputType1: "default",
  inputType2: "default",
  placeholder1: "12..",
  endText: "MP",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 1,
      message: "minCharacter1",
    },
  },
  name2: "camera2",
  label2: "camera",
  placeholder2: "48..",

  type2: "text",
  id2: "camera",
  validation2: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 1,
      message: "minCharacter1",
    },
  },
};
export const phone_storage_validation = {
  name1: "ram",
  label1: "Storage",
  type1: "number",
  id1: "ram",
  additonText1: "writePhoneStorage",
  inputType1: "default",
  inputType2: "default",
  placeholder1: "6..",
  endText: "GB",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
    min: {
      value: 1,
      message: "minCharacter1",
    },
  },
  name2: "storage",
  placeholder2: "128..",
  type2: "text",
  id2: "camera",
  validation2: {
    required: {
      value: true,
      message: "required",
    },
    min: {
      value: 1,
      message: "minCharacter1",
    },
  },
};

export const name_validation2 = {
  name: "name",
  label: "name",
  type: "text",
  id: "name",
  inputType: "default",
  placeholder: "writeYourName",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 3,
      message: "minCharacters3",
    },
  },
};

export const desc_validation = {
  name1: "description",
  label1: "description",
  inputType1: "multiline",
  id1: "description",
  placeholder1: "write description ...",
  validation1: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 200,
      message: "200 characters max",
    },
  },
};

export const password_validation = {
  name: "password",
  label: "password",
  type: "password",
  id: "password",
  inputType: "default",
  autoFocus: true,
  placeholder: "typePassword",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "minCharacters6",
    },
  },
};
export const password_confirm_v = {
  name: "confirm-password",
  label: "confirmPassword",
  type: "password",
  id: "confirm-password",
  inputType: "confirm-password",
  placeholder: "typePassword",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const phone_number_v = {
  name: "phoneNumber",
  label: "phoneNumber",
  type: "tel",
  inputType: "phoneNumber",
  id: "phoneNumber",
  validation: {
    setValueAs: (e: string) => e.replace(/\D/g, ""),
    minLength: {
      value: 12,
      message: "completeFull",
    },
  },
};

export const otp_validation = {
  name: "otpCode",
  type: "tel",
  id: "otpCode",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
  pattern: {
    pattern: "[0-9]*",
    message: "not valid",
  },
};

export const email_validation = {
  name: "email",
  label: "email address",
  type: "email",
  id: "email",
  placeholder: "write a random email address",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};

export const cardNumber_validation = {
  name: "cardNumber",
  label: "cardNumber",
  type: "tel",
  id: "cardNumber",
  inputType: "cardNumber",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 16,
      message: "minCharacters16",
    },
    maxLength: {
      value: 16,
      message: "maxCharacters16",
    },
  },
};

export const cardMonth_validation = {
  className: " w-28",
  name: "mmyy",
  label: "mmyy",
  type: "tel",
  id: "mmyy",
  inputType: "cardDates",
  mask: "99/99",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 4,
      message: "maxCharacters4",
    },
  },
};

export const amount_validation = {
  name: "amount",
  label: "amount",
  type: "tel",
  id: "amount",
  inputType: "default",
  placeholder: "33 000...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    min: {
      value: 1000,
      message: "maxVal1000uzs",
    },
    max: {
      value: 1000000,
      message: "maxVal1mln",
    },
  },
};
