type Props = {
  readonly className?: string;
  readonly onDoubleClick?: () => void;
  readonly text: string;
};

export const ListItemText = ({ className, onDoubleClick, text }: Props) => (
  <div className={className} onDoubleClick={onDoubleClick}>
    {text}
  </div>
);
