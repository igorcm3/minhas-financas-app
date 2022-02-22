import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email: ', this.state.email)
        console.log('Senha: ', this.state.senha)
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuario');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup htmlFor="email" label="Email: *">
                                                <input type="email"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                    className='form-control'
                                                    id="email"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup htmlFor="senha" label="Senha: *">
                                                <input type="password"
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({ senha: e.target.value })}
                                                    className='form-control'
                                                    id="senha"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Password"
                                                />
                                            </FormGroup>
                                            <button className="btn btn-success" onClick={this.entrar}>Entrar</button>
                                            <button className="btn btn-danger" onClick={this.prepareCadastrar}>Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(Login);
