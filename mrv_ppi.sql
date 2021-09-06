-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Sep 2021 pada 05.07
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mrv_ppi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_layer`
--

CREATE TABLE `data_layer` (
  `id_layer` int(255) NOT NULL,
  `id_group` int(255) NOT NULL DEFAULT 0,
  `nama_layer` varchar(255) NOT NULL,
  `sumber_layer` varchar(255) NOT NULL,
  `tanggal_data` date DEFAULT '2015-01-01',
  `group_layer` varchar(255) NOT NULL,
  `data_layer` longtext NOT NULL,
  `desc_layer` longtext NOT NULL,
  `visible` varchar(255) NOT NULL DEFAULT 'hidden'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_layer`
--

INSERT INTO `data_layer` (`id_layer`, `id_group`, `nama_layer`, `sumber_layer`, `tanggal_data`, `group_layer`, `data_layer`, `desc_layer`, `visible`) VALUES
(15, 5, 'Deforestasi Tahun 2015', 'Data Deforestasi KLHK', '2015-12-31', 'Deforestasi', '{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"properties\":{\"tahun_def\":\"2015\",\"tanggal_def\":\"2015-12-31\",\"hutan_def\":\"hrs\",\"area\":20,\"unit\":\"ha\"},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[469.31671142578125,-0.7607808662819371],[469.30847167968744,-0.7854978539243997],[469.33868408203125,-0.7909904981540058],[469.31671142578125,-0.7607808662819371]]]}},{\"type\":\"Feature\",\"properties\":{\"tahun_def\":\"2015\",\"tanggal_def\":\"2015-12-31\",\"hutan_def\":\"hlks\",\"area\":10,\"unit\":\"ha\"},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[469.18212890624994,-0.45043481325254864],[469.149169921875,-0.47789973201326874],[469.193115234375,-0.48888566912309733],[469.21234130859375,-0.475153244974683],[469.18212890624994,-0.45043481325254864]]]}}]}', '', 'hidden'),
(16, 5, 'Deforestasi Tahun 2016', 'Data Deforestasi KLHK', '2016-12-31', 'Deforestasi', '{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"properties\":{\"tahun_def\":\"2016\",\"tanggal_def\":\"2016-12-31\",\"hutan_def\":\"hrs\",\"area\":30,\"unit\":\"ha\"},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[469.3428039550782,-0.8514090937773031],[469.3345642089843,-0.8761255229096057],[469.346923828125,-0.884364296613886],[469.3647766113281,-0.8816180407359536],[469.3428039550782,-0.8514090937773031]]]}},{\"type\":\"Feature\",\"properties\":{\"tahun_def\":\"2016\",\"tanggal_def\":\"2016-12-31\",\"hutan_def\":\"hlks\",\"area\":15,\"unit\":\"ha\"},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[469.22744750976557,-0.2856433479945185],[469.1944885253906,-0.31310879311378215],[469.2384338378906,-0.3240949513690917],[469.2576599121093,-0.31036225173543236],[469.22744750976557,-0.2856433479945185]]]}},{\"type\":\"Feature\",\"properties\":{\"tahun_def\":\"2016\",\"tanggal_def\":\"2016-12-31\",\"hutan_def\":\"hms\",\"area\":18,\"unit\":\"ha\"},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[469.6366882324218,-0.19912679640451061],[469.6861267089844,-0.19912679640451061],[469.6861267089844,-0.16204812380265493],[469.6366882324218,-0.16204812380265493],[469.6366882324218,-0.19912679640451061]]]}}]}', '', 'hidden');

-- --------------------------------------------------------

--
-- Struktur dari tabel `group_layer`
--

CREATE TABLE `group_layer` (
  `id_group` int(255) NOT NULL,
  `nama_group` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `group_layer`
--

INSERT INTO `group_layer` (`id_group`, `nama_group`, `deskripsi`) VALUES
(5, 'Deforestasi', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `style_layer`
--

CREATE TABLE `style_layer` (
  `id_style` int(255) NOT NULL,
  `id_layer` int(255) NOT NULL,
  `id_group` int(255) NOT NULL,
  `nama_layer` varchar(255) NOT NULL,
  `tipe_style` varchar(255) NOT NULL DEFAULT 'default style',
  `warna` varchar(255) NOT NULL DEFAULT 'default style'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `style_layer`
--

INSERT INTO `style_layer` (`id_style`, `id_layer`, `id_group`, `nama_layer`, `tipe_style`, `warna`) VALUES
(3, 15, 5, 'Deforestasi Tahun 2015', 'default style', '#5969ff'),
(4, 16, 5, 'Deforestasi Tahun 2016', 'default style', '#5969ff');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_layer`
--
ALTER TABLE `data_layer`
  ADD PRIMARY KEY (`id_layer`);

--
-- Indeks untuk tabel `group_layer`
--
ALTER TABLE `group_layer`
  ADD PRIMARY KEY (`id_group`);

--
-- Indeks untuk tabel `style_layer`
--
ALTER TABLE `style_layer`
  ADD PRIMARY KEY (`id_style`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_layer`
--
ALTER TABLE `data_layer`
  MODIFY `id_layer` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `group_layer`
--
ALTER TABLE `group_layer`
  MODIFY `id_group` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `style_layer`
--
ALTER TABLE `style_layer`
  MODIFY `id_style` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
