import React from 'react';
import { Box, Select, FormField, TextInput, Button, Table, TableBody, TableRow, TableCell, Text, Anchor } from 'grommet';import Layout from '../components/layout';
import { FormAdd, FormSubtract } from 'grommet-icons';
let people = {};
let formattedArray = [];
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people,
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

  changeDrink = (name, addDrink) => {
    console.log(name);
    if (addDrink===true){
      this.setState({
        people: people[name]= people[name] + 1
      });
    }else if (addDrink===false && people[name] >= 1){
      this.setState({
        people: people[name]= people[name] - 1
      });
    }
  }


  render() {
    return (
      <Layout>
        <br />
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
                    label='Add Name'
                    onClick={() => this.addName()}
              />
            </Box>
          </Box>
          <br />
          <br />
          <Table>
            <TableBody>
              {Object.keys(people).map((key, index) => (
                <TableRow key={key}>
                  <TableCell size='small' scope='row'>
                    <Text weight='bold'>{key}</Text>
                  </TableCell>
                    <TableCell size='xxsmall' scope='row'>
                      <Anchor
                        onClick={() => this.changeDrink(key, false)}>
                        <FormSubtract style={{ marginTop: '7px' }} />
                      </Anchor>
                    </TableCell>
                  <TableCell size='xxsmall' scope='row'>
                    <Text weight='bold'>{people[key]}</Text>
                  </TableCell>
                  <TableCell size='xxsmall' scope='row'>
                    <Anchor
                      onClick={() => this.changeDrink(key, true)}>
                      <FormAdd style={{ marginTop: '7px' }}/>
                    </Anchor>
                  </TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
          <br />
        </Box>
      </Layout>
    );
  }
}

export default Index;
