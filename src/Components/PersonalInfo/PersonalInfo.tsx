import React, { useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  Upload,
} from 'antd';
import { Title, FormContainer } from '../CommonStyles/commonStyles';
import { BirthdayDate } from './style';

const PersonalInfo: React.FC = () => { 

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
      
                  <Form.Item>ФИО</Form.Item>
                  <Input style={{marginTop: -10}} placeholder="Иванов Иван Иванович" />
                    
                  <Form.Item style={{marginTop: 10}}>Место жительства</Form.Item>
                  <Input style={{marginTop: -10}} placeholder="Город, улица, дом" />
                    
                  <Form.Item style={{marginTop: 10}}>Номер телефона</Form.Item>
                  <Input style={{marginTop: -10}} placeholder="Введите номер телефона" />
          
                  <Form.Item style={{marginTop: 10}}>Дата рождения</Form.Item>
                  <BirthdayDate>
                    <DatePicker style={{marginTop: -10}} placeholder="Выберите дату рождения" />
                  </BirthdayDate>
          
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

export default PersonalInfo;
