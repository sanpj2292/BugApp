import {makeStyles, createStyles} from './styles';

export default makeStyles(theme => createStyles({
    root: {
        fontWeight: 'bold !important',
        alignItems: 'center',
        padding: theme.spacing(0.5),
    },
    New:{
        backgroundColor: '#4169E1',
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
        backgroundColor: '#BC8F8F',
    },
    Highest:{
        backgroundColor: '#D2691E',
        color: '#FFFFFF'
    },
    Middle: {
        backgroundColor: '#FFE4E1',
    }
}))