import React from 'react';
import { StatusBar } from 'react-native';

import {
    Container, Header, TotalCars, HeaderContent, CarList
} from './styles';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';

export function Home() {
    const carMocked = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price: 120
        },
        thumbnail: 'https://www.pngmart.com/files/22/Porsche-Panamera-Transparent-PNG.png'
    }

    return (
        <Container>
            <StatusBar barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total of 4000 cars
                    </TotalCars>
                </HeaderContent>
            </Header>

            <CarList
                data={[1, 2, 3, 4, 5, 6, 7]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={carMocked} />}
            />
        </Container>
    );
}