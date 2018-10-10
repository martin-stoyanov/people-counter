import React from 'react';
import { Box, Select, FormField, TextInput, Button, Table, TableBody, TableRow, TableCell, Text } from 'grommet';import Layout from '../components/layout';
import { FormAdd, FormSubtract } from 'grommet-icons';
let people = {};
let formattedArray = [];
let selectName = '';
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people,
      selectName,
      formattedArray
    };
  }

  addName = () => {
    console.log('name added');
    let name = document.getElementById("item").value;
   this.setState({
      people: people[name]= 0
    });
    console.log(people);
  } 

  changeDrink = () => {
  let name = this.state.selectName;
  console.log(`name is ${name}`);
   this.setState({
      people: people[name]= people[name] + 1
    });
    formattedArray = [];
    console.log(people);
    for (let prop in people) {
      formattedArray.push(prop + ":\t" + people[prop] + "\n");
    }
  }


  render() {
    const { selectName } = this.state;
    return (
      <Layout>
        <Box direction='column' align='center'>
          <Box direction='row' margin={{ top: 'medium' }}>
            <FormField>
              <TextInput 
                id='item' 
                name='item' 
                placeholder='Person'
              />
            </FormField>
            <Box>
              <Button 
                    label='Add Person'
                    onClick={() => this.addName()}
              />
            </Box>
          </Box>
          <br />
          <br />
          <Box direction='row'>
              <Select 
                id='drinker' 
                name='drinker' 
                options={Object.keys(people)}
                placeholder={'Person'}
                value={selectName}
                onChange={({ option }) => this.setState({ selectName: option })}
              />
              <Box>      
              <Button 
                    label='Add drink'
                    onClick={() => this.changeDrink()}
              />
            </Box>
          </Box>
          <br />
          <br />
          <Table>
            <TableBody>
              {Object.keys(people).map((key, index) => (
                <TableRow key={key}>
                  <TableCell size='xsmall' scope='row'>
                    <Text weight='bold'>{key}</Text>
                  </TableCell>
                  <FormSubtract style={{ marginTop: '8px' }}/>
                  <TableCell size='xxsmall' scope='row'>
                    <Text weight='bold'>{people[key]}</Text>
                  </TableCell>
                  <Button 
                    onClick={() => this.addName()}>
                  <FormAdd style={{ marginTop: '8px' }}/>
                  </Button>
                </TableRow>
            ))}
            </TableBody>
          </Table>
        </Box>
      </Layout>
    );
  }
}

export default Index;
