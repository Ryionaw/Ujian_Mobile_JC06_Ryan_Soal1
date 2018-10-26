import React, {Component} from 'react';
import { Container, Header, Content, Footer, Item, Input, Left, Icon, Body,
List,ListItem,Thumbnail,Text, Card, CardItem, Button, Right,Form, Label, View} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TextInput } from 'react-native';

class App extends Component{
  constructor() 
  { 
    super(); 
    this.state = {berat: 0, tinggi: 0, massa:0, diagnosa:'', printText:false}; 
  }
  calculate()
  {
    let weight = this.state.berat;
    let height = this.state.tinggi/100 ;
    let IMT = (Number(weight) / Math.pow(Number(height),2));
    this.setState({massa: IMT});
    if(IMT<18.5){
      this.setState({diagnosa:'Berat Badan Kurang'})
    }
    else if(IMT>=18.5 && IMT<=24.9){
      this.setState({diagnosa:'Berat Badan Ideal'})
    }
    else if(IMT>=25.0 && IMT<=29.9){
      this.setState({diagnosa:'BB Berlebih'})
    }
    else if(IMT>=30 && IMT<=39.9){
      this.setState({diagnosa:'BB Sangat Berlebih'})
    }
    else if(IMT>=39.9){
      this.setState({diagnosa:'Obesitas'})
    }
    this.setState({printText:true});
  }
  render(){
    const data= ()=>{
      return <Text>{this.state.massa}</Text>
    };
    return(
      <Container>
        <Header style={{backgroundColor:'#0000FF'}}>
        <Body><Text style={{alignSelf:'center',fontSize: 20, color: 'white'}}>INDEKS MASSA TUBUH</Text></Body>
        </Header>
        <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        </Text>   
          a
        <Content>
          <Grid>
            <Col>
          <Text></Text>
          <Left><Item floatingLabel style={{maxWidth:'75%'}}><Label style={{textAlign:'center'}}> Massa(KG) </Label><Input keyboardType="numeric"  onChangeText={(text) => this.setState({berat: parseInt(text)})}/></Item></Left>
          </Col>
          <Col>
          <Text></Text>
          <Right><Item floatingLabel style={{maxWidth:'75%'}}><Label style={{textAlign:'center'}}> Tinggi(CM) </Label><Input keyboardType="numeric" onChangeText={(text) => this.setState({tinggi: parseInt(text)})}/></Item></Right>
          </Col>
          </Grid>
          <Button style={{alignSelf:'center',backgroundColor:'#0000FF'}} primary onPress={()=>{this.calculate()}}><Text>Hitung IMT</Text></Button>
          {this.state.printText && <Text style={{textAlign:"center",fontWeight:'bold'}}> Massa Tubuh: {this.state.berat} kg</Text>}
          {this.state.printText && <Text style={{textAlign:"center",fontWeight:'bold'}}> Tinggi Badan: {this.state.tinggi} cm</Text>}
          {this.state.printText && <Text style={{textAlign:"center",fontWeight:'bold'}}> Indeks Massa Tubuh: {this.state.massa}</Text>}
          {this.state.printText && <Text style={{textAlign:"center",fontWeight:'bold'}}> Diagnosa: {this.state.diagnosa}</Text>}
        </Content>
        <Footer style={{alignItems:'center',backgroundColor:'#0000FF'}}>
          <Text style={{color:'yellow'}}>
            IMT CALCULATOR 
          </Text>
        </Footer>
      </Container>
    )
  }
}

export default App;
