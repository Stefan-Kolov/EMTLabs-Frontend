import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import DeleteHostDialog from "../DeleteHostDialog/DeleteHostDialog.jsx";
import {useNavigate} from 'react-router'
import EditHostDialog from "../EditHostDialog/EditHostDialog.jsx";

const HostCard = ({host, onEdit, onDelete}) => {
    const navigate = useNavigate();
    const [deleteHostDialogOpen, setDeleteHostDialogOpen] = useState(false);
    const [editHostDialogOpen, setEditHostDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{host.name}</Typography>
                    <Typography variant="h5">{host.surname}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon/>}
                        onClick={() => navigate(`/hosts/${host.id}`)}
                    >
                        Info
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditHostDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteHostDialogOpen(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditHostDialog
                open={editHostDialogOpen}
                onClose={() => setEditHostDialogOpen(false)}
                host={host}
                onEdit={onEdit}
            />
            <DeleteHostDialog
                open={deleteHostDialogOpen}
                onClose={() => setDeleteHostDialogOpen(false)}
                host={host}
                onDelete={onDelete}
            />
        </>
    );
};

export default HostCard;
