import React from 'react';
import { Title } from './style';
import { FormContainer } from './style';
import { FormItem } from './style'
import {
    Form,
    Select,
} from 'antd';


const { Option } = Select;

const Skills = () => {
  return (
      <div>
          <Title>Навыки</Title>
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                >
        <FormContainer>
                  <FormItem>Навыки</FormItem>
                  
                        <Select style={{ width: 300 }}>
                            <Option value="React">React</Option>
                            <Option value="Angular">Angular</Option>
                            <Option value="View">View</Option>
                            <Option value="TypeSript">TypeSript</Option>
                            <Option value="Sass/Scss">Sass/Scss</Option>
                            <Option value="Styled components">Styled components</Option>
                            <Option value="Material UI">Material UI</Option>
                            <Option value="Rest API">Rest API</Option>
                        </Select>
        </FormContainer>
    </Form>
      </div>
  )
}

export default Skills
