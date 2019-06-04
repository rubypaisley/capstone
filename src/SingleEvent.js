import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Badge, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { goUpdateAssigned, goUpdateEvent } from './store/events';


class SingleEvent extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        const event = this.props.navigation.getParam('event');
        const type = this.props.navigation.getParam('type');
        const badgeStatusMap = {
            upcoming: 'primary',
            'completed': 'success',
            'completed-pending': 'warning',
            overdue: 'warning',
            missed: 'error'
        };
        const colorMap = {
            chore: '#AA8EB7',
            event: '#9BB8D5',
            appointment: '#BCD59B',
            errand: '#D79963'
        };
        return (
            <Card
                title={event.title}
                subtitle={event.category}
                containerStyle={{ borderColor: colorMap[event.category], flex: 1, justifyContent: 'space-between' }}
            >
                <Badge
                    value={event.status}
                    status={badgeStatusMap[event.status]}
                />
                <Text>
                    DATE: {event.deadline}
                </Text>
                <Text>
                    TIME:
                </Text>
                <Text>
                    {event.description}
                </Text>

                {type === 'ASSIGNED' ? (<Button
                    title="COMPLETE"
                    onPress={() => this.props.completeAssignedTask(event.id, { status: 'completed-pending' })}
                />) : (
                        <View>
                            <Button
                                title="EDIT"
                            //onPress === can edit 
                            />
                            <Button
                                title="DELETE"
                            />
                        </View>
                    )}
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        completeAssignedTask: (id, updates) => dispatch(goUpdateAssigned(id, updates))
    }
}

export default connect(null, mapDispatchToProps)(SingleEvent);