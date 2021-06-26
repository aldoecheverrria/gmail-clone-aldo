import React from 'react';
import './Sidebar.css';
import { Button } from  '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star"
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/Note";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {

  const dispatch = useDispatch();

  return (
  <div className="sidebar">
    <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Redactar
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Recibidos"
        number={53}
        selected={true}
      />
      <SidebarOption
        Icon={StarIcon}
        title="Destacados"
        number={12}
        selected={false}
      />
      <SidebarOption
        Icon={AccessTimeIcon}
        title="Pospuestos"
        number={34}
        selected={false}
      />
      <SidebarOption
        Icon={LabelImportantIcon}
        title="Importantes"
        number={2}
        selected={false}
      />
      <SidebarOption
        Icon={NearMeIcon}
        title="Enviados"
        number={65}
        selected={false}
      />
      <SidebarOption
        Icon={NoteIcon}
        title="Borradores"
        number={13}
        selected={false}
      />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title="Más"
        number={23}
        selected={false}
      />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon/>
          </IconButton>
          <IconButton>
            <DuoIcon/>
          </IconButton>
          <IconButton>
            <PhoneIcon/>
          </IconButton>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;