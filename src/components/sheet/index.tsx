import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from '@/components/ui/sheet';

type SheetProp = {
    openButton: JSX.Element;
    title: string;
    description: string;
    submitButton: JSX.Element;
    contentClass: string;
};

export default function SheetDiv({
    openButton,
    title,
    description,
    submitButton,
    contentClass,
}: SheetProp) {
    return (
        <div>
            <Sheet>
                <SheetTrigger>{openButton}</SheetTrigger>
                <SheetContent className={contentClass}>
                    <SheetHeader>
                        <SheetTitle>{title}</SheetTitle>
                        <SheetDescription>{description}</SheetDescription>
                    </SheetHeader>
                    <SheetFooter>{submitButton}</SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}
