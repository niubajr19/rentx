import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

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
    Accessories,
    Footer
} from "./styles";
import { Button } from "../../components/Button";

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

                <Accessories>
                    <Accessory name="380Km/h" icon={SpeedSvg} />
                    <Accessory name="3.2s" icon={AccelerationSvg} />
                    <Accessory name="800 HP" icon={ForceSvg} />
                    <Accessory name="Gasolina" icon={GasolineSvg} />
                    <Accessory name="Auto" icon={ExchangeSvg} />
                    <Accessory name="2 Pessoas" icon={PeopleSvg} />
                </Accessories>

                <About>
                    O Lamborghini Huracán é um automóvel desportivo construído pela empresa italiana Lamborghini, substituindo o lendário Gallardo, uns dos carros mais bem sucedidos da história da companhia
                </About>
            </Content>

            <Footer>
                <Button title="Continuar" />
            </Footer>

        </Container>
    );
}
