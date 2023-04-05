import { Box, Menu, MenuItem } from '@mui/material';
import React  from 'react';
import ListIcon from "@mui/icons-material/List";
import { useAppDispatch } from './store';

import { ActivityFlag } from './TierData';
import { addActivity, clearActivity } from './ActivityThunk';
import { UserActivity } from './UserActivity';

type ActionMenuProps = {
    organisationId: number;
    activityFlag: ActivityFlag;
}

export default function ActionMenu({ organisationId , activityFlag}:ActionMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLDivElement> ) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleContacted = () => {
    const activityParams :UserActivity = {
      activity: ActivityFlag.Contacted,
      organisationId: organisationId
    };

    dispatch(addActivity(activityParams))
    setAnchorEl(null);
  };

  const handleRejected = () => {
    const activityParams :UserActivity = {
      activity: ActivityFlag.Rejected,
      organisationId: organisationId
    };

    dispatch(addActivity(activityParams))
    setAnchorEl(null);
  };

  const handleClear = () => {
 
    dispatch(clearActivity(organisationId))

    setAnchorEl(null);

  };

  return (
    <div>
        <Box onClick={handleClick} sx= {{cursor:'pointer'}}>
         <ListIcon /></Box>
      <Menu
        id="activity-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
 
        <MenuItem disabled = {activityFlag === ActivityFlag.Contacted} onClick={handleContacted}>Contacted</MenuItem>  
        <MenuItem disabled = {activityFlag === ActivityFlag.Rejected} onClick={handleRejected}>Rejected</MenuItem> 
        <MenuItem disabled = {activityFlag === ActivityFlag.Contacted || activityFlag === ActivityFlag.Rejected } onClick={handleClear}>Remove Activity</MenuItem> 
      </Menu>
    </div>
  );
}
