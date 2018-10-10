import React from 'react';
import { Box, Select, FormField, TextInput, Button, Table, TableBody, TableRow, TableCell } from 'grommet';import Layout from '../components/layout';

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

  onAddName = () => {
    console.log('name added');
    let name = document.getElementById("item").value;
   this.setState({
      people: people[name]= 0
    });
    console.log(people);
  } 

  onAddDrink = () => {
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
                    onClick={() => this.onAddName()}
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
                    onClick={() => this.onAddDrink()}
              />
            </Box>
          </Box>
          <br />
          <br />
          <Table>
            <TableBody>
              {Object.keys(people).map((key, index) => (
                <TableRow key={key}>
                  <TableCell size='xxsmall' scope='row'>{key}</TableCell>
                  <TableCell size='xxsmall' scope='row'>{people[key]}</TableCell>
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
