import {makeStyles, createStyles} from './styles';

export default makeStyles(theme => createStyles({
    root: {
        fontWeight: 'bold',
        alignItems: 'center',
        padding: theme.spacing(0.5),
    },
    New:{
        backgroundColor: '#4169E1',
        color: '#FFFFF8',
    },
    Developing:{
        backgroundColor: '#F4A460'
    },
    Developed: {
        backgroundColor: '#FFDEAD',
    },
    DevelopConfirmed: {
        backgroundColor: '#228B22',
    },
    Remand: {
        backgroundColor: '#A9A9A9',
    },
    Evaluated: {
        backgroundColor: '#B0C4DE',
    },
    High: {
        backgroundColor: '#ffaa00',
    },
    Highest:{
        backgroundColor: '#D2691E',
        color: '#FFFFF8',
    },
    Middle: {
        backgroundColor: '#FFE4E1',
    },
    DevelopConfirming: {
        backgroundColor: '#aaff55',
    }
}))