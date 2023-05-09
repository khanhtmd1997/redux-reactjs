import React, { useCallback } from "react";
import LayoutFilterForm from "./layout";

export default function FilterFormComponent(props) {
  const {
    form,
    onSubmitForm,
    filterData,
    formLayout,
    arrayButton,
    setStep,
    clearFilter,
    colButton,
    children,
  } = props;

  //
  const clearForm = useCallback(() => {
    form.resetFields();
    clearFilter();
  }, [form, clearFilter]);
  return (
    <LayoutFilterForm
      form={form}
      onSubmitForm={onSubmitForm}
      filterData={filterData}
      formLayout={formLayout}
      arrayButton={arrayButton}
      setStepClick={setStep}
      clearForm={clearForm}
      colButton={colButton}
      children={children}
    />
  );
}
