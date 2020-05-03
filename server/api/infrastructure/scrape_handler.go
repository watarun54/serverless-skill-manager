package infrastructure

import (
	"bytes"
	"io/ioutil"
	"net/http"

	"github.com/PuerkitoBio/goquery"
	"github.com/saintfish/chardet"
	"golang.org/x/net/html/charset"
)

type ScrapeHandler struct{}

func NewScrapeHandler() *ScrapeHandler {
	return &ScrapeHandler{}
}

func (handler *ScrapeHandler) GetTitleFromURL(url string) (title string, err error) {
	// Getリクエスト
	res, err := http.Get(url)
	if err != nil {
		return
	}
	defer res.Body.Close()

	// 読み取り
	buf, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return
	}

	// 文字コード判定
	det := chardet.NewTextDetector()
	detRslt, err := det.DetectBest(buf)
	if err != nil {
		return
	}

	// 文字コード変換
	bReader := bytes.NewReader(buf)
	reader, err := charset.NewReaderLabel(detRslt.Charset, bReader)
	if err != nil {
		return
	}

	// HTMLパース
	doc, err := goquery.NewDocumentFromReader(reader)
	if err != nil {
		return
	}

	// titleを抜き出し
	title = doc.Find("title").Text()
	return
}
