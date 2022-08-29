import Button from '~/components/Button';

function MenuItem({ data }) {
    if (data.mode) {
        return (
            <Button hasIcon rightIcon={data.rightIcon} leftIcon={data.leftIcon} to={data.to} disable>
                {data.title}
            </Button>
        );
    } else {
        return (
            <Button hasIcon rightIcon={data.rightIcon} leftIcon={data.leftIcon} to={data.to}>
                {data.title}
            </Button>
        );
    }
}

export default MenuItem;
