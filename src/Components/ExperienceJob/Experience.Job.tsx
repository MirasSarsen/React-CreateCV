import React from 'react';
import {
    DatePicker,
    Space,
    Form,
    Input,
    Button,
} from 'antd'; 
import type { DatePickerProps, GetProps } from 'antd';
import { Title } from './style';
import { FormContainer } from './style';
import { FormItem } from './style';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

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
            <FormItem>Компания</FormItem>
            <Input placeholder='Компания' />

            <FormItem>Должность</FormItem>
            <Input placeholder='Должность' />

            <FormItem>Период работы</FormItem>
        <Space direction="vertical" size={12}>
            <RangePicker
            format="YYYY-MM-DD"
            onOk={onOk}
            />
        </Space>
            <FormItem>Описание</FormItem>
            <Input style={{ height: 120, resize: 'none' }} />
            <Button type="primary" style={{ width: 1650, marginTop: 15 }}>Добавить ещё</Button>
        </FormContainer>
    </Form>
);

export default ExperienceJob;
