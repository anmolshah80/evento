import * as Tooltip from '@radix-ui/react-tooltip';
import { ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

type TooltipUIProps = {
  sourceElement: React.ReactNode;
  tooltipContent: React.ReactNode;
  tooltipContentClassName: ClassValue;
  hideTooltip: boolean;
};

// Source -> https://www.radix-ui.com/primitives/docs/components/tooltip
const TooltipUI = ({
  sourceElement,
  tooltipContent,
  tooltipContentClassName,
  hideTooltip = false,
}: TooltipUIProps) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>{sourceElement}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={cn('tooltip-content', tooltipContentClassName, {
              hidden: hideTooltip,
            })}
            sideOffset={5}
          >
            {tooltipContent}
            <Tooltip.Arrow className="tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipUI;
