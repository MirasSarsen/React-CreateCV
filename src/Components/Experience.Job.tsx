import React from 'react';
import {
    DatePicker,
    Space,
    Form,
    Input,
    Button,
} from 'antd'; 
import type { DatePickerProps, GetProps } from 'antd';

import { Title, FormContainer } from './CommonStyles/commonStyles';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { TextArea } = Input;

const { RangePicker } = DatePicker;

const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
  console.log('onOk: ', value);
};

const ExperienceJob: React.FC = () => (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      >
        <Title>Опыт работы</Title>
        <FormContainer>
            <Form.Item label="Компания" style={{marginTop: -10, marginLeft: -236}}/>
            <Input style={{ marginTop: -20 }} placeholder='Компания' />

            <Form.Item label="Должность" style={{marginTop: 10, marginLeft: -226}}/>
            <Input style={{marginTop: -20}} placeholder='Должность' />

            <Form.Item label="Период работы" style={{marginTop: 10, marginLeft: -194}} />
        <Space style={{marginTop: -20}} direction="vertical" size={12}>
            <RangePicker
            format="YYYY-MM-DD"
            onOk={onOk}
            />
        </Space>
            <Form.Item label="Описание" style={{ marginTop: 10, marginLeft: -237 }} />
            
            <TextArea rows={5} />
            <Button type="primary" style={{ width: 1650, marginTop: 15 }}>Добавить ещё</Button>
        </FormContainer>
    </Form>
);

export default ExperienceJob;
