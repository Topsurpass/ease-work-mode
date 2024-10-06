import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    //DropdownMenuLabel,
    //DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type DropDownProp = {
    dropMenuIcon: JSX.Element;
    menuClassName: string;
    menuOptions: { icon: JSX.Element; label: string }[];
};

export default function DropDownMenu({
    dropMenuIcon,
    menuClassName,
    menuOptions,
}: DropDownProp) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{dropMenuIcon}</DropdownMenuTrigger>
            <DropdownMenuContent className={menuClassName}>
                {/*<DropdownMenuLabel>My Account</DropdownMenuLabel>*/}
                {/*<DropdownMenuSeparator />*/}
                {menuOptions.map((menu, idx) => (
                    <DropdownMenuItem key={idx} className="p-2">
                        <div className="flex gap-1">
                            {menu.icon}
                            {menu.label}
                        </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
