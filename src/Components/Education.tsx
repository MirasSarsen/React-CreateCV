import React, { useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';

import { Title, FormContainer } from './CommonStyles/commonStyles';

const { Option } = Select;

const Education: React.FC = () => {
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
            <Form.Item label="Учреждение" style={{marginTop: 5, marginLeft: -215}} />
            <Input style={{ marginTop: -20 }} placeholder='Учреждение' value={institution} onChange={handleInstitutionChange}/>

            <Form.Item label="Дата окончания" style={{marginTop: 10, marginLeft: -190}} />
            <DatePicker style={{ marginTop: -20 }} placeholder='Дата окончания' />
      
            <Form.Item label="Степень" style={{marginTop: 10, marginLeft: -252}} />
              <Select style={{ marginTop: -20, width: 300 }}>
                  <Select.Option value="Бакалавр">Бакалавр</Select.Option>
                  <Select.Option value="Магистратура">Магистратура</Select.Option>
              </Select>
        </FormContainer>
    </Form>
  );
};

export default Education;
