type Props = Readonly<{
  className?: string;
  onDoubleClick?: () => void;
  text: string;
}>;

export const ListItemText = ({ className, onDoubleClick, text }: Props) => (
  <div className={className} onDoubleClick={onDoubleClick}>
    {text}
  </div>
);
