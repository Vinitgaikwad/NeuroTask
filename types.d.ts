type Stats = {
    cpuUsage: number;
    ramUsage: number;
    storageUsage: number;
};

type StaticData = {
    totalStorage: number;
    cpuModel: string;
    totalMemoryGB: number;
};

interface Window {
    electron: {
        subscribeStatistics: (callback: (stats: Stats) => void) => void,
        getStaticData: () => Promise<StaticData>
    }
}