import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from 'react';

export default function BasicTemplate(props) {
  const { hasBorder } = props;
  const [headingBorder, setHeadingBorder] = useState(null);
  const [subHeadingBorder, setSubHeadingBorder] = useState(null);

  useEffect(() => {
    if (hasBorder) {
      setHeadingBorder({
        borderBottomWidth: "5px",
        borderLeftWidth: "5px",
        borderColor: props.textColor,
        px: "20px",
        borderRadius: "0"
      });
      setSubHeadingBorder({
        borderBottomWidth: "3px",
        borderLeftWidth: "3px",
        borderColor: props.textColor,
        px: "10px",
        borderRadius: "0"
      });
    }
    else {
      setHeadingBorder(null);
      setSubHeadingBorder(null);
    }

  }, [hasBorder]);
  return (
    <Grid
      h="100%"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
      className="backdrop-filter backdrop-blur-sm"
    >
      <GridItem rowSpan={2} colSpan={6}>
        <Editable textAlign="center"
          defaultValue="Hi, I am Amit! ⚡️"
          fontSize="6xl" color={props.textColor} pt="20" fontWeight="bold" textShadow="0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 6%)" >
          <EditablePreview {...headingBorder} />
          <EditableInput />
        </Editable>
      </GridItem>
      <GridItem rowSpan={1} colSpan={6}>
        <Editable textAlign="center"
          defaultValue="️ I write about software, design and SAAS."
          fontSize="4xl" color={props.textColor} pt="18" textShadow="0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 6%)">
          <EditablePreview  {...subHeadingBorder} />
          <EditableInput />
        </Editable>
      </GridItem>
      <GridItem colSpan={6}>
        <Editable textAlign="right"
          defaultValue="️👇 You know what do!"
          fontSize="4xl" color={props.textColor} p="10" textShadow="0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 6%)">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </GridItem>
    </Grid>
  );
}