$(function() {
    $("#zipcode").click(function() {
        // 入力された値を取得

        // urlを設定
        var url = "https://zipcloud.ibsnet.co.jp/api/search";
        // 送るデータを成形する
        var param = { zipcode: zipcode };
        // サーバーと通信(Ajax)

        $.ajax({
                type: "GET",
                cache: false,
                data: ,
                url: index.html,
                dataType: "jsonp"
            })
            .done(function(res) {
                if (res.status != 200) {
                    // 通信には成功。APIの結果がエラー
                    // エラー内容を表示
                    $('#zip_result').html(res.message);
                } else {
                    //住所を表示
                    "message": null,
                    "results": [{
                            "address1": "東京都",
                            "address2": "品川区",
                            "address3": "西大井",
                            "kana1": "ﾄｳｷｮｳﾄ",
                            "kana2": "ｼﾅｶﾞﾜｸ",
                            "kana3": "ﾆｼｵｵｲ",
                        },
                        {
                            "address1": "東京都",
                            "address2": "品川区",
                            "address3": "西大井",
                            "kana1": "ﾄｳｷｮｳﾄ",
                            "kana2": "ｼﾅｶﾞﾜｸ",
                            "kana3": "ﾆｼｵｵｲ",
                        }
                    ],
                    "status": 200
                }

            })
            .fail(function(error) {
                console.log(error);
                $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
            });
    });
});