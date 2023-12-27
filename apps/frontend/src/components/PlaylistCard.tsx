import { TagOutlined } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import { TagType } from "../types/TagType";

const PlaylistCardComponent: React.FC<TagType> = (tag: TagType) => {
  const [checked, setChecked] = React.useState(["wifi"]);
  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const tagText: string = `${tag.title} - ${tag.value}`;
  return (
    <ListItem>
      <ListItemIcon>
        <TagOutlined />
      </ListItemIcon>
      <ListItemText
        id={`switch-list-label-${tag.title}`}
        secondary={tagText}
        primary={tag.createdAt.toString()}
        primaryTypographyProps={{ variant: "h6", color: "primary" }}
        secondaryTypographyProps={{ variant: "body2", color: "secondary" }}
      />
      <Switch
        edge="end"
        onChange={handleToggle("wifi")}
        checked={checked.indexOf("wifi") !== -1}
        inputProps={{
          "aria-labelledby": "switch-list-label-wifi",
        }}
      />
    </ListItem>
  );
};

export default PlaylistCardComponent;
