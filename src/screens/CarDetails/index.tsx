import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
    Container,
    Header,
    CarImages,
    Description,
    Details,
    Brand,
    Name,
    Content,
    Rent,
    Period,
    Price,
    About,
} from "./styles";

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>
            <CarImages>
                <ImageSlider
                    imagesUrl={[
                        "https://www.pngmart.com/files/22/Porsche-Panamera-Transparent-PNG.png",
                    ]}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <About>
                    O Lamborghini Huracán é um automóvel desportivo construído pela empresa italiana Lamborghini, substituindo o lendário Gallardo, uns dos carros mais bem sucedidos da história da companhia
                </About>
            </Content>
        </Container>
    );
}
