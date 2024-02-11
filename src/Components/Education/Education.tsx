import React, { useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';

import { Title } from './style';
import { FormContainer } from './style';
import { FormItem } from './style';
import { InputDate } from './style';

const { Option } = Select;

type SizeType = Parameters<typeof Form>[0]['size'];

const Education: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const [institution, setInstitution] = useState<string>('')

  const handleInstitutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstitution(e.target.value);
  }

  console.log(institution)

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      >
        <Title>Образование</Title>
        <FormContainer>
            <FormItem>Учреждение</FormItem>
              <Input placeholder='Учреждение' value={institution} onChange={handleInstitutionChange}/>
              
              <FormItem>Дата окончания</FormItem>
              <InputDate>
                  <DatePicker placeholder='Дата окончания' />
              </InputDate>
              
              <FormItem>Степень</FormItem>
              <Select style={{ width: 300 }}>
                  <Option value="Бакалавр">Бакалавр</Option>
                  <Option value="Магистратура">Магистратура</Option>
              </Select>
        </FormContainer>
    </Form>
  );
};

export default Education;
