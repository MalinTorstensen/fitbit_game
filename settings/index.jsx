function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Demo Settings</Text>}>
        <Toggle
          settingsKey="toggle"
          label="Toggle Switch"
        />
        <ColorSelect
          settingsKey="color"
          colors={[
            {color: "#880808"},
            {color: "#954535"},
            {color: "#722F37"},
            {color: "#00165A"},
            {color: "#2B0080"},
            {color: "#008080"},
            {color: "#005A5A"},
            {color: "black"},
            {color: "#007500"},
            {color: "#454B1B"},
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
