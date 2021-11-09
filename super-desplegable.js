import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    ¿Cómo diseño sitios web?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>La experiencia de usuario requiere una analogía a la vida cotidiana. Elegir qué componente instalar depende de la cantidad de info entre otras cosas. </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    ¿Cuáles bocetos he hecho?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body> Un boceto es un fondo blanco con líneas y curvas negras que simplifican y generalizan los estilos tanto como las texturas para basar la idea en un foco de atención y no perder los detalles.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    ¿Cuánto tiempo se necesita para vectorizar?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>El proceso de diseño individual o en equipo necesita cierta cantidad de horas, no más de una semana, pero si un par de días para lograr darle una forma original que se base en algo familiar pero que aporte con un diseño innovador.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    ¿Para qué sirve visualizar distintas versiones de los colores?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>En el universo de los colores hay un efecto comunicativo innegable. Un ícono expresa emociones distintas y es bueno ver la misma forma combinando colores para comparar y elegir una paleta estrategicamente. </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne