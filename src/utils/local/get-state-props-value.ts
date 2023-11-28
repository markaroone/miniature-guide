type PartialComponentProps<ComponentProps, ValueType> = Partial<
  Record<keyof ComponentProps, ValueType>
>;

interface DefaultValue<ValueType> {
  default: ValueType;
}

export type GetStatePropsValueConfig<ComponentProps, ValueType> =
  PartialComponentProps<ComponentProps, ValueType> & DefaultValue<ValueType>;

export const getStatePropsValue = <
  ComponentProps extends Record<string, unknown>,
  OutputType,
>(
  ownerState: ComponentProps,
  config: GetStatePropsValueConfig<ComponentProps, OutputType>
): OutputType => {
  let propertyValue: OutputType = config.default;

  Object.keys(config).forEach((key) => {
    if (key === 'default') return;
    if (ownerState[key] === true) propertyValue = config[key] as OutputType;
  });

  return propertyValue;
};
