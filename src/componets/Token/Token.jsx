import React from 'react'
import { TokenDiv, TokenContainer, FigureDiv, Content } from './style'

function Token() {
    return (
        <Content>
            <TokenContainer>
                <TokenDiv>
                    <h1>Token</h1>

                </TokenDiv>
                <FigureDiv>
                    <h2>0.00000001</h2>
                </FigureDiv>
                
            </TokenContainer>
        </Content>
    )
}

export default Token
