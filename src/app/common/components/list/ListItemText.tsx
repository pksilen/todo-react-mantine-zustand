type Props = {
  readonly className?: string;
  readonly onDoubleClick?: () => void;
  readonly text: string;
};

export const ListItemText = ({ className, onDoubleClick, text }: Props) => (
  <span className={className} onDoubleClick={onDoubleClick} />
);
