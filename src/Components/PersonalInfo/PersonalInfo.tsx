import React, { useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  Upload,
} from 'antd';
import { Title } from './style';
import { FormContainer } from './style';
import { FormItem } from './style'
import { InputDate } from './style'

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const PiComponent: React.FC = () => { 

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="formContainer"
      > 
        <Title>Персональная информация</Title>
        <FormContainer>
                  <FormItem>
                    ФИО
                  </FormItem>
                  <Input placeholder="Иванов Иван Иванович" />

                  <FormItem>
                    Место жительства
                  </FormItem>
                  <Input placeholder="Город, улица, дом" />

                  <FormItem>
                    Номер телефона
                  </FormItem>
                  <Input placeholder="Введите номер телефона" />

                  <FormItem>
                    Дата рождения
                  </FormItem>
                  <InputDate>
                    <DatePicker placeholder="Выберите дату рождения" />
                  </InputDate>
                    <Upload action="/upload.do" listType="picture-card">
                      <button style={{ border: 0, background: 'none' }} type="button">
                        <div style={{ marginTop: -10 }}>Выберите ваш аватар</div>
                      </button>
                   </Upload>
          </FormContainer>
      </Form>
    </>
  );
};

export default PiComponent;
