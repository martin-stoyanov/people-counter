import React from 'react';
import {
  Box, FormField, TextInput, Button, Table, TableBody, TableRow, TableCell, Text, Anchor,
} from 'grommet'; import { FormAdd, FormSubtract, Close } from 'grommet-icons';
import Layout from '../components/layout';

const people = {};
class Index extends React.Component {
  addName = () => {
    console.log('name added');
    const name = document.getElementById('item').value;
    this.setState({
      people: people[name] = 0, // eslint-disable-line react/no-unused-state
    });
    console.log(people);
  }

  removeName = (name) => {
    delete people[name];
    this.setState({
      people, // eslint-disable-line react/no-unused-state
    });
  }

  changeDrink = (name, addDrink) => {
    console.log(name);
    if (addDrink === true) {
      this.setState({
        people: people[name] += 1, // eslint-disable-line react/no-unused-state
      });
    } else if (addDrink === false && people[name] >= 1) {
      this.setState({
        people: people[name] -= 1, // eslint-disable-line react/no-unused-state
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
                placeholder='Name'
              />
            </FormField>
            <Button
              onClick={() => {
                document.getElementById('item').value = '';
              }}
            >
              <Close
                style={{ marginLeft: '10px', marginRight: '10px' }}
              />
            </Button>
            <Box>
              <Button
                label='Add'
                onClick={() => this.addName()}
              />
            </Box>
          </Box>
          <br />
          <br />
          <Table>
            <TableBody>
              {Object.keys(people).map(key => (
                <TableRow
                  key={key}
                  style={{
                    WebkitUserSelect: 'none',
                    KhtmlUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    MozUserSelect: 'none',
                    OUserSelect: 'none',
                    UserSelect: 'none',
                  }}
                >
                  <TableCell size='xxsmall' scope='row'>
                    <Anchor
                      onClick={() => this.removeName(key)}
                    >
                      <Close
                        style={{ marginTop: '7px' }}
                      />
                    </Anchor>
                  </TableCell>
                  <TableCell size='small' scope='row'>
                    <Text weight='bold'>{key}</Text>
                  </TableCell>
                  <TableCell size='xxsmall' scope='row'>
                    <Anchor
                      onClick={() => this.changeDrink(key, false)}
                    >
                      <FormSubtract style={{ marginTop: '7px' }} />
                    </Anchor>
                  </TableCell>
                  <TableCell size='xxsmall' scope='row'>
                    <Text weight='bold'>{people[key]}</Text>
                  </TableCell>
                  <TableCell size='xxsmall' scope='row'>
                    <Anchor
                      onClick={() => this.changeDrink(key, true)}
                    >
                      <FormAdd style={{ marginTop: '7px' }} />
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
