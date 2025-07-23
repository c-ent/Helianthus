import icon from '@/assets/images/icon.svg'

const Loader = () => {
return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
    <img
        src={icon}
        alt="Loading..."
        className="spinning-icon animate-spin"
    />
    </div>
);
};

export default Loader;
