import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { ChatRoomProps } from './ChatRoomProps';


const MsgContainer = ({ message }: ChatRoomProps) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                {message.map((msg, index) => (
                    <TableRow key={index}>
                        <TableCell>{msg.msg} - {msg.username}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MsgContainer;