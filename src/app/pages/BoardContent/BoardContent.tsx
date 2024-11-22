import Link from "next/link";
import Stack from 'react-bootstrap/Stack';
const BoardContent = () => {
    return (
        <div style={{ borderBottom: '1px solid #ccc' }}>
            <Stack direction="horizontal" gap={3} className="mt-4" style={{ paddingBottom: "20px", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ height: '75px', width: '218px', background: '#f8f9fc', alignContent: 'center', justifyContent: 'center', borderRadius: '4px', padding: '16px' }}>
                    <Link className="p-2" style={{ textDecoration: 'none', height: '26px', width: '218px', color: '#333', fontWeight: 700 }} href="/categories" data-event-label="https://hellobacsi.com/categories/">
                        <img src="https://hhg-common.hellobacsi.com/common/nav-icons/discover.svg" className="css-8v0zyu etqqn1s6"></img>
                        Chuyên mục
                    </Link>
                </div>
                <div style={{ height: '75px', width: '218px', background: '#f8f9fc', alignContent: 'center', justifyContent: 'center', borderRadius: '4px', padding: '16px' }}>
                    <Link className="p-2" style={{ textDecoration: 'none', height: '26px', width: '218px', color: '#333', fontWeight: 700 }} href="/categories" data-event-label="https://hellobacsi.com/categories/">
                        <img src="https://hhg-common.hellobacsi.com/common/nav-icons/care.svg" className="css-8v0zyu etqqn1s6"></img>
                        Đặt lịch khám
                    </Link>
                </div>
                <div style={{ height: '75px', width: '218px', background: '#f8f9fc', alignContent: 'center', justifyContent: 'center', borderRadius: '4px', padding: '16px' }}>
                    <Link className="p-2" style={{ textDecoration: 'none', height: '26px', width: '218px', color: '#333', fontWeight: 700 }} href="/categories" data-event-label="https://hellobacsi.com/categories/">
                        <img src="https://hhg-common.hellobacsi.com/common/nav-icons/health-tools.svg" className="css-8v0zyu etqqn1s6"></img>
                        Kiểm tra sức khỏe
                    </Link>
                </div>
                <div style={{ display: 'flex', height: '75px', width: '218px', background: '#f8f9fc', alignContent: 'center', justifyContent: 'center', borderRadius: '4px', padding: '16px' }}>
                    <Link className="p-2" style={{ textDecoration: 'none', height: '26px', width: '218px', color: '#333', fontWeight: 700 }} href="/categories" data-event-label="https://hellobacsi.com/categories/">
                        <img src="https://hhg-common.hellobacsi.com/common/nav-icons/shop.svg"></img>
                        Cửa hàng
                        <span style={{ position: 'absolute', fontWeight: 200, backgroundColor: '#00B16A', borderRadius: '1000px', color: '#fff' }}>
                            Mới
                        </span>
                    </Link>

                </div>
                <div style={{ height: '75px', width: '218px', background: '#f8f9fc', alignContent: 'center', justifyContent: 'center', borderRadius: '4px', padding: '16px' }}>
                    <Link className="p-2" style={{ textDecoration: 'none', height: '26px', width: '218px', color: '#333', fontWeight: 700 }} href="/categories" data-event-label="https://hellobacsi.com/categories/">
                        <img src="https://hhg-common.hellobacsi.com/common/nav-icons/community.svg" className="css-8v0zyu etqqn1s6"></img>
                        Cộng đồng
                    </Link>
                </div>
                <div>
                    <hr style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', height: '10px', background: '#333' }}></hr>
                </div>
            </Stack>
            <Stack>

            </Stack>
        </div>
    )
}


export default BoardContent;