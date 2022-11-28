export const useMangaApi = () => {
    const fetchList = () => {
        return $fetch('http://127.0.0.1:8000/api/list/')
    }

    return {
        fetchList,
    }
}